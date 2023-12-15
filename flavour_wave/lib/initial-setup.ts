import axiosInstance from "@/services/axiosInstance";

export interface IUser {
  customer_id: string;
  email: string;
  imageUrl: string;
  name: string;
  password: string;
}

export async function initialSetup(user: IUser) {
  const customer = await getCustomer(user.customer_id);

  console.log("CUS:" + customer);

  if (customer) {
    return customer;
  } else {
    return await createCustomer(user);
  }
}

async function getCustomer(customerID: string) {
  return (await axiosInstance.get("customers/" + customerID)).data;
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
    const res = await axiosInstance.post("customer/create", {
      customer_id,
      name,
      email,
      image_url: imageUrl,
      password,
    });
    return res.data;
  } catch (e: any) {
    console.log(e);
  }
}
