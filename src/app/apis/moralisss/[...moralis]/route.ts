// 'use client';

import {MoralisNextApi} from '@moralisweb3/next';

export default MoralisNextApi({apiKey: process.env.MORALIS_API_KEY});

// export {handler as GET, handler as POST};
