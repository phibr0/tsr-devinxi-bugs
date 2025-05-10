
export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/$slug/_pathless/"!</div>
}
