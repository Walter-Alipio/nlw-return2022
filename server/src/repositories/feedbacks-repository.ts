export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string; //no ts a ? para campo opcional fica junto a chave
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData)=> Promise<void>;
}