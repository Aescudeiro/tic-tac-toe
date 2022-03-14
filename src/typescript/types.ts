export enum Player {
    X = "❌",
    O = "🔵",
}

export type Score = {
    [Player.X]: number;
    [Player.O]: number;
};
