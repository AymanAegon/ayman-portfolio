'use server';

/**
 * @fileOverview An AI agent that summarizes project descriptions.
 *
 * - summarizeProjectDescription - A function that summarizes a project description.
 * - SummarizeProjectDescriptionInput - The input type for the summarizeProjectDescription function.
 * - SummarizeProjectDescriptionOutput - The return type for the summarizeProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectDescriptionInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The project description to summarize.'),
});
export type SummarizeProjectDescriptionInput = z.infer<
  typeof SummarizeProjectDescriptionInputSchema
>;

const SummarizeProjectDescriptionOutputSchema = z.object({
  shortSummary: z.string().describe('A short, engaging summary of the project.'),
});
export type SummarizeProjectDescriptionOutput = z.infer<
  typeof SummarizeProjectDescriptionOutputSchema
>;

export async function summarizeProjectDescription(
  input: SummarizeProjectDescriptionInput
): Promise<SummarizeProjectDescriptionOutput> {
  return summarizeProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectDescriptionPrompt',
  input: {schema: SummarizeProjectDescriptionInputSchema},
  output: {schema: SummarizeProjectDescriptionOutputSchema},
  prompt: `You are an expert at creating concise and engaging project descriptions.

  Please summarize the following project description in a way that is both informative and attention-grabbing. The summary should be short and compelling, highlighting the key aspects of the project.

  Project Description: {{{projectDescription}}}`,
});

const summarizeProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'summarizeProjectDescriptionFlow',
    inputSchema: SummarizeProjectDescriptionInputSchema,
    outputSchema: SummarizeProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
