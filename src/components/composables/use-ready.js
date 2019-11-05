import { ref, onMounted, computed } from '@vue/composition-api'
// import store from '@/store'
import axios from '@/plugins/axios'

export const STATUS = {
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed'
}

export default function useReady () {
  const status = ref(STATUS.PROCESSING)

  const isReady = computed(() => {
    return status.value !== STATUS.FAILED
  })

  async function queryInitData () {
    const url = '/system/initData'
    try {
      const data = await axios.post(url).then(resp => resp.data)
      status.value = STATUS.SUCCESS
      console.log(data)
    } catch (error) {
      status.value = STATUS.FAILED
      throw new Error(error)
    }
  }

  onMounted(() => {
    queryInitData()
  })

  return {
    status,
    isReady
  }
}
