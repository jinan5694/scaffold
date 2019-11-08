import { ref, onMounted, computed } from '@vue/composition-api'
import store from '@/store'
import axios from '@/plugins/axios'
import API from '@/api'

export const STATUS = {
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed'
}

export default function useReady () {
  const status = ref(STATUS.PROCESSING)

  const isReady = computed(() => {
    return status.value === STATUS.SUCCESS
  })

  async function queryInitData () {
    try {
      const data = await axios.post(API.initData)
      store.commit('setInitData', data.data)
      status.value = STATUS.SUCCESS
    } catch (error) {
      status.value = STATUS.FAILED
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
