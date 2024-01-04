import { defineStore } from 'pinia'
export default function shop(){
    return defineStore('elements', {
        state: () =>({
            click:{},
            array: [],
            details: true,
            fullDetails: '',
            category: '',
            title: '',
            description: '',
            price: '',
            image: '',
            notify: 0,

        })
    })()
}
