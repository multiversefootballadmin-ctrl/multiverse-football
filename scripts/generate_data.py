import pandas as pd
import json
import os

print("Lendo a planilha do FootyStats...")
df = pd.read_excel("top5_ligas_jogadores_2526.xlsx", sheet_name="Jogadores")

# Filtrar jogadores com pelo menos 500 minutos (remover anomalias)
df = df[df['minutes_played_overall'] >= 500].copy()

stat_cols = ['goals_overall', 'assists_overall', 'detailed_key_passes_total_overall', 
             'detailed_dribbles_successful_total_overall', 'detailed_shots_on_target_total_overall',
             'detailed_fouls_drawn_total_overall', 'detailed_passes_completed_total_overall',
             'red_cards_overall', 'detailed_dispossesed_total_overall', 'detailed_npxg_total_overall', 
             'detailed_xa_total_overall']
             
for col in stat_cols:
    if col in df.columns:
        df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)

# Motor WIF v1.0
df['WIF_Total'] = (df['goals_overall']*6.0 + df['assists_overall']*4.0 + df['detailed_key_passes_total_overall']*1.0 + 
                   df['detailed_dribbles_successful_total_overall']*1.0 + df['detailed_shots_on_target_total_overall']*1.0 + 
                   df['detailed_fouls_drawn_total_overall']*0.5 + df['detailed_passes_completed_total_overall']*0.1 + 
                   df['detailed_dispossesed_total_overall']*-0.5 + df['red_cards_overall']*-3.0)

df['Games_90'] = df['minutes_played_overall'] / 90.0
df['WIF_Per_90'] = (df['WIF_Total'] / df['Games_90']).round(1)

# Motor xWIF (Predição)
df['xWIF_Total'] = (df['detailed_npxg_total_overall']*6.0 + df['detailed_xa_total_overall']*4.0 + df['detailed_key_passes_total_overall']*1.0 + 
                    df['detailed_dribbles_successful_total_overall']*1.0 + df['detailed_shots_on_target_total_overall']*1.0 + 
                    df['detailed_fouls_drawn_total_overall']*0.5 + df['detailed_passes_completed_total_overall']*0.1 + 
                    df['detailed_dispossesed_total_overall']*-0.5 + df['red_cards_overall']*-3.0)
df['xWIF_Per_90'] = (df['xWIF_Total'] / df['Games_90']).round(1)

# Chapéu Seletor de Posições (Percentis)
df['xA_per_90'] = df['detailed_xa_total_overall'] / df['Games_90']
df['npxG_per_90'] = df['detailed_npxg_total_overall'] / df['Games_90']
df['dribbles_per_90'] = df['detailed_dribbles_successful_total_overall'] / df['Games_90']
df['tackles_per_90'] = df['detailed_tackles_successful_total_overall'].fillna(0) / df['Games_90']

df['xA_pct'] = df['xA_per_90'].rank(pct=True)
df['npxG_pct'] = df['npxG_per_90'].rank(pct=True)
df['drib_pct'] = df['dribbles_per_90'].rank(pct=True)
df['tack_pct'] = df['tackles_per_90'].rank(pct=True)

def assign_position(row):
    if row['npxG_pct'] > 0.85 and row['npxG_pct'] > row['xA_pct'] and row['npxG_pct'] > row['drib_pct']: return 'RB'
    elif row['xA_pct'] > 0.80 and row['xA_pct'] >= row['npxG_pct'] and row['xA_pct'] >= row['drib_pct']: return 'QB'
    elif row['drib_pct'] > 0.80 and row['drib_pct'] >= row['npxG_pct'] and row['drib_pct'] >= row['xA_pct']: return 'WR'
    elif row['tack_pct'] > 0.70: return 'TE'
    else: return 'OL'

df['WIF_Position'] = df.apply(assign_position, axis=1)

def get_trend(row):
    if row['xWIF_Per_90'] > row['WIF_Per_90'] + 0.5: return 'up'
    elif row['xWIF_Per_90'] < row['WIF_Per_90'] - 0.5: return 'down'
    return 'flat'

df['trend'] = df.apply(get_trend, axis=1)

# Ordenar e gerar JSON
df = df.sort_values(by='WIF_Per_90', ascending=False)
df['rank'] = range(1, len(df) + 1)

players = []
for _, row in df.iterrows():
    players.append({
        "rank": f"{row['rank']:02d}",
        "name": str(row['known_as']),
        "pos": str(row['WIF_Position']),
        "club": str(row['clube']),
        "wif": str(row['WIF_Per_90']),
        "xWif": str(row['xWIF_Per_90']),
        "trend": str(row['trend']),
        "stats": f"{int(row['goals_overall'])} G | {int(row['assists_overall'])} Ast | {row['npxG_per_90']:.2f} npxG/90"
    })

with open('public/data/players.json', 'w', encoding='utf-8') as f:
    json.dump(players, f, ensure_ascii=False, indent=2)

print(f"Sucesso! {len(players)} jogadores salvos em public/data/players.json.")
