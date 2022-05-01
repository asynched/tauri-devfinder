import React from 'react'

/**
 * This is a helper function for handling events inside a component, it's used
 * as a higher-order function to wrap a callback function.
 *
 * ## Example
 *
 * ```tsx
 * <form onSubmit={preventDefault(() => void 0)} />
 * ```
 *
 * @param handler Handler function to be executed after the event is prevented
 * from it's default behavior.
 * @returns A closure that can be used to attach the event listener.
 */
export function preventDefault<F extends () => any>(handler: F) {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handler()
  }
}
