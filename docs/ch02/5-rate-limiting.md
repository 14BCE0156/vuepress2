# Rate limiting

* Git rate limiting places requests that are violating a specified limit into a suspended state.  
* This prevents overuse of the GitHub shared resource.

## Rate Limit Configurations / Thresholds

* <ins>**API Requests (per user)**</ins>    

| Authenticated   | Unauthenticated  |
|-----------------|------------------|
| 7000 / per hour | 60 / per hour    |

* <ins>**Search API Requests (per user)**</ins>

| Authenticated   | Unauthenticated  |
|-----------------|------------------|
| 30 / per minute | 10 / per minute  |

* <ins>**LFS API Requests (per user)**</ins>

|  Authenticated    | Unauthenticated  |
|-------------------|------------------|
| 3000 / per minute | 100 / per minute |

* <ins>**GraphQL API Requests (per user)**</ins>

|  Authenticated    | Unauthenticated  |
|-------------------|------------------|
| 7000 / per minute | 0 / per minute   |

* <ins>**Git operations limit (i.e. 'git fetch', 'git pull', 'git clone', etc...)**</ins>

|  Authenticated    | Unauthenticated  |
|-------------------|------------------|
|  Not Enabled      | 0                |


##### For additional information regarding rate limits visit the GitHub Rate limiting site located here: [Rate Limiting](https://developer.github.com/enterprise/2.15/v3/#rate-limiting)