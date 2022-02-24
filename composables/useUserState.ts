import { acceptHMRUpdate, defineStore } from "pinia";

export const useUsers = defineStore("profile", {
    state: () => ({
        count: 0,
        modifiedTimes: 0,
        profile: [] as object[]
    }),
    getters: {
        user: state => state.profile,
    },
    actions: {
        async setUsers(num: number) {
            const { data, error } = await useFetch(`/api/users?num=${num}`);

            if (error !== null) {
                this.$patch((state) => {
                    state.users = data;
                    state.modifiedTimes++;
                });
            }
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot));
}