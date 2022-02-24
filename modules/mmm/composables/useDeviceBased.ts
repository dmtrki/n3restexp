export const useDeviceBased = (base: string) => {

    const {$device} = useNuxtApp()

    const useDeviceBased = computed(() => $device.isDesktopOrTablet ? base + 'Desktop' : base + 'Mobile')

    return {useDeviceBased, $device}
}