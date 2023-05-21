/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import Config from "../../config"
import type { ApiConfig } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"

const API_PAGE_SIZE = 50
const API_KEY = "418b1fd7f34320d77fca6912fb79c01d"
/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getMovieTrending() {
    const response: ApiResponse<any> = await this.apisauce.get(
      `/trending/movie/week?api_key=${API_KEY}`,
      {
        amount: API_PAGE_SIZE,
      },
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    try {
      const data = response.data
      // console.log("===========================================>")
      // console.log(data.results)
      // console.log("===========================================")
      return { kind: "ok", results: data.results }
    } catch (e) {
      // kind에 대한 것을 무조건 리턴 시켜줘야 하는 듯
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
