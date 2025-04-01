export type DropdownItem = {
    key?: number,
    label: string,
    icon: React.ReactNode,
    action: () => void
} | {
    divider: React.ReactNode
}