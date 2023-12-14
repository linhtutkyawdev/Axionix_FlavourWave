export interface IUser {
  customer_id: string;
  email: string;
  imageUrl: string;
  name: string;
  password: string;
}

export async function initialSetup(user: IUser) {
  if (!user) return;

  const customer = await getCustomer(user.customer_id);

  if (customer) {
    return customer;
  } else {
    console.log(user);

    return createCustomer({
      customer_id: user.customer_id,
      email: user.email,
      imageUrl: user.imageUrl,
      name: user.name,
      password: user.password,
    });
  }
}
async function getCustomer(customerID: string) {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/customers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      return data.customers.find((c: IUser) => c.customer_id === customerID);
    } else {
      return null;
    }
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
  password,
}: IUser) {
  console.log(customer_id, email, imageUrl, name, password);

  try {
    const res = await fetch("http://127.0.0.1:8000/api/customer/create", {
      method: "POST",
      body: JSON.stringify({
        customer_id,
        name,
        email,
        image_url: imageUrl,
        password,
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
