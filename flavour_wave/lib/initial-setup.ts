import { auth, useAuth } from "@clerk/nextjs";

export async function useInitialSetup() {
  const { userId } = useAuth();

  // api call to check user already created in db or create one if not created or if already exist then retrieve that data
}
