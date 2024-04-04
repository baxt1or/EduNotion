import { WorkspaceForm } from "../shared/workspace-form"


type Props = {
    label: string
}

export const Title = ({ label }: Props) => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-xs font-medium text-zinc-400 p-2'>
                {label}
            </h1>

            <WorkspaceForm />
        </div>
    )
}
