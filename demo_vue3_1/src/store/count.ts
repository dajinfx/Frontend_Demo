import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    //真正存储的地方
    state() {
        return {
            sum: 6,
            city: "beijing",
            country: "China",
            firstName: "Jason",
            secondName: "Jin"
        }
    },

    getters: {
        bigSum(state) {
            return state
        }
    },

    //action里面放着的是一个个的动作方法， 相应组件中的“动作”
    //复用方便
    actions: {
        increment(para: any) {
            console.log('increment被调用了: ', para)
            //修改数据 

            if (this.sum < 10) {
                this.sum += para
            }

        },
        minus(para: number) {
            console.log('minus被调用了: ', para)
            if (this.sum > 5) {
                this.sum -= para
            }
        }
    }

})