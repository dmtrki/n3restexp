export const useMmm = () => {
    const prefix = 'mmm'

    const fixpre = (value: string) => prefix + value
    return {
        prefix,
        fixpre
    }
}