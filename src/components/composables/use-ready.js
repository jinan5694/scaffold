import { ref } from '@vue/composition-api'
import store from '@/store'
import axios from '@/plugins/axios'

export default function useReady () {
  const isReady = ref(false)
  const loading = ref(false)

  const url = '/system/initData'
  axios.post(url).then(resp => {

  })

  return {
    isReady
  }
}
