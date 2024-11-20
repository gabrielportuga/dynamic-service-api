export class Order {
    tenantId: string;
    orderData: OrderData;
}

export class OrderData {
    item: string;
    quantity: number;
}