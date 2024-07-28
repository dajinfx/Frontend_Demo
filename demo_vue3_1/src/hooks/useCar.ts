import { reactive } from 'vue'
import axios, { Axios } from 'axios'

export default function () {
    let imglist = reactive([
        'https://tse1.mm.bing.net/th/id/OIP.FyPtk8_zYexNZx5TkxUqNwHaHa?&rs=1&pid=ImgDetMain'
    ])

    async function getCar() {
        try {
            let result = await axios.get('https://tse4.mm.bing.net/th/id/OIP.lJmk_RLfvqMgoftxDbZeqwHaHa?&rs=1&pid=ImgDetMain')
            imglist.push(result.data.message)
            console.log(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    return { imglist, getCar }
}