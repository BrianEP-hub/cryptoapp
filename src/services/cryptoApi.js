import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'x-access-token': 'coinranking09245591a09f867e32c8f62353cbd99be71932ac2c8a9294'
};

const baseUrl = 'https://api.coinranking.com/v2';


const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    mode: "cors",
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ uuid, timePeriod }) => createRequest(`/coin/${uuid}/history/${timePeriod}`)
        })
    })
});


export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
