export interface Purchase {
  usedAt: string;
  productId: number;
  productName: string;
  value: string;
  unit: string;
  quantity: string;
  source: string;
  beneficiary: {
    id: string;
    name: string;
  };
}
