import React from 'react'

export function preventDefault<F extends () => any>(handler: F) {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handler()
  }
}
