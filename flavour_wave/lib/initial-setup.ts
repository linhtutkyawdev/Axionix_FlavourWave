export interface IUser {
  customer_id: string;
  email: string;
  imageUrl: string;
  name: string;
}

export async function useInitialSetup(user: IUser) {
  if (!user) return;

  const customer = await getCustomer(user.customer_id);
  if (customer) {
    return customer;
  }
  if (!customer) {
    createCustomer({
      customer_id: user.customer_id,
      email: user.email,
      imageUrl: user.imageUrl,
      name: user.name,
    });
  }
}
async function getCustomer(customerID: string) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/customer/login", {
      method: "POST",
      body: JSON.stringify({
        customer_id: customerID,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) return data;
    return null;
  } catch (e: any) {
    console.log();
    return null;
  }
}
async function createCustomer({
  customer_id,
  email,
  imageUrl,
  name,
}: {
  customer_id: string;
  name: string;
  email: string;
  imageUrl: string;
}) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/customer/login", {
      method: "POST",
      body: JSON.stringify({
        customer_id,
        name,
        email,
        imageUrl,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) return data;
  } catch (e: any) {
    console.log(e);
  }
}
