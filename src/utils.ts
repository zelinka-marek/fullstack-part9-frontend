/**
 * Helper function for exhaustive type checking
 */
export function assertNever(value: never): never {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
}
