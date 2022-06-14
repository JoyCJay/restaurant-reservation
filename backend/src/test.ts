import { Bucket, Cluster, Collection, connect, GetResult, QueryResult } from 'couchbase'

const adminUser = {
    "room_id": "000",
    "password": "admin",
    "token": "cj_jwt_token",
    "contract_info": "15921288224",
    "name": "Chengjie ZHANG",
    "last_logged_info": 1655042698940
}

async function connectToDB() {
    const clusterConnStr = 'couchbase://localhost' // `couchbases://<your-cluster-ip>`
    const bucketName = 'user' //'travel-sample'

    const cluster: Cluster = await connect(clusterConnStr, {
      username: 'Administrator',
      password: '123456'
    })
    
    const bucket: Bucket = cluster.bucket(bucketName)
    
    const collection: Collection = bucket.defaultCollection()

    // compare to Collection.insert
    collection.upsert(adminUser.room_id, adminUser)
        .then()
        .catch()
    // const queryResult: QueryResult = await bucket
    //     .scope('inventory')
    //     .query('SELECT name FROM `airline` WHERE country=$1 LIMIT 10', {
    //         parameters: ['United States'],
    //     })
    // console.log('Query Results:')

    // queryResult.rows.forEach((row) => {
    //     console.log(row)
    // })
}

connectToDB()