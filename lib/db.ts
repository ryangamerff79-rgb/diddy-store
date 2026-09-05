import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export async function createOrder(order: {
  id: string;
  payment_id: string;
  external_reference: string;
  product_key: string;
  email: string;
  status: string;
  delivered: boolean;
}) {
  const { data, error } = await supabase
    .from("orders")
    .insert(order)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getOrderByPaymentId(
  paymentId: string
) {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("payment_id", paymentId)
    .maybeSingle();

  if (error) throw error;

  return data;
}

export async function updateOrderStatus(
  paymentId: string,
  status: string
) {
  const { data, error } = await supabase
    .from("orders")
    .update({ status })
    .eq("payment_id", paymentId)
    .select()
    .single();

  if (error) throw error;

  return data;
}
