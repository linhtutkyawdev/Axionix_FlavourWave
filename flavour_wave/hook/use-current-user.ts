"use client";
import { useUser } from "@clerk/nextjs";

interface IUser {
  userId: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  imageUrl: string;
}

export function useCurrentUser() {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn) {
    return null;
  }

  if (!user) {
    return null;
  }

  const result: IUser = {
    userId: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.emailAddresses[0].emailAddress,
    imageUrl: user.imageUrl,
  };

  if (user) {
    return result;
  }
}
