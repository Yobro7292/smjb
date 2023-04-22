import { Prisma } from "@prisma/client";
import client from ".";

// Set new user
export async function setUser(user: any) {
    try {
      const usersFromDb = await client.user.create({
        data: user,
      });
      if(usersFromDb)
      return { success: true };
      else 
      return {success: false}
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError ||
        error instanceof Prisma.PrismaClientUnknownRequestError
      ) {
        return error;
      }
    }
  }
export async function getUser() {
    try {
      const usersFromDb = await client.user.findMany();
      return { usersFromDb };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError ||
        error instanceof Prisma.PrismaClientUnknownRequestError
      ) {
        return error;
      }
    }
  }