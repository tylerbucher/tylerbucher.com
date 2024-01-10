export const openInNewTab = (value: string) => {
    // @ts-ignore
    window.open(value, '_blank').focus()
};