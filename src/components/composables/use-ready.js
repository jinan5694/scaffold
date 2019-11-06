import { ref, onMounted, computed } from '@vue/composition-api'
import store from '@/store'
import axios from '@/plugins/axios'

export const STATUS = {
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed'
}

export default function useReady () {
  const status = ref(STATUS.PROCESSING)
  console.log(status.value)

  const isReady = computed(() => {
    return status.value !== STATUS.FAILED
  })

  async function queryInitData () {
    const url = '/system/initData'
    try {
      const data = await axios.post(url)
      store.commit('setInitData', data.data)
      status.value = STATUS.SUCCESS
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