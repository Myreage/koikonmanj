import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  randomSentence: publicProcedure.query(() => {
    const sentences = [
      "Oh nan pas encore Colline d'Asie 😞",
      "Pas super faim perso 🫤",
      "Je vous laisse décider perso tout me va 🤷‍♂️",
      "J'ai fait pizza hier vous saoulez 😒",
      "J'ai mon tup, m'attendez pas 👍",
      "Vous avez vu mon frichti ? 🧐"
    ]
    // randomly pick a sentence from the list
    const randomIndex = Math.floor(Math.random() * sentences.length)
    return sentences[randomIndex]
  })
});
