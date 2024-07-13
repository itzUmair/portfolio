export default function page({params}: {params: {projectID: string}}) {
  return (
    <div>{params.projectID}</div>
  )
}
