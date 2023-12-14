import axiosInstance from "@/services/axiosInstance";

export interface IUser {
  customer_id: string;
  email: string;
  imageUrl: string;
  name: string;
}

export async function useInitialSetup(user: IUser) {
  if (!user.customer_id) return null;

  const customer = await getCustomer(user.customer_id);
  if (customer) {
    return customer;
  }

  return await createCustomer({
    customer_id: user.customer_id,
    email: user.email,
    imageUrl: user.imageUrl,
    name: user.name,
  });
}

async function getCustomer(customerID: string) {
  try {
    return (await axiosInstance.get(`customer/${customerID}`)).data;
  } catch (e: any) {
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
    return (
      await axiosInstance.post("customer/create", {
        customer_id,
        name,
        email,
        imageUrl,
      })
    ).data;
  } catch (e: any) {
    return null;
  }
}
