import { NextRequest, NextResponse } from 'next/server';
const adsSdk = require('facebook-nodejs-business-sdk');

const accessToken = 'EAALZB13QDQxIBO3GQeQEYupnIZAz9q5uqOa0Tuk2CNtnX7B0yh8JJJAzjjBZCWFtYoyMrL309Nli4ncZAEcZBReQDiQKRNbwTgHRyrnOV6bZCZCmoLhiMG82KJ5rdKjq9WejZCZChZAVehoMxfKybJCKWQNwBwQBL1gbkdjSNTP8KmDFJi7XG2ZBYqopT5DHTGY09isSK4RHb0Blx70t7UZCZBzAXgowMKAZDZD';

export async function POST(req: NextRequest): Promise<Response> {
  const { title } = await req.json();

  adsSdk.FacebookAdsApi.init(accessToken);

  const AdAccount = adsSdk.AdAccount;
  const Campaign = adsSdk.Campaign;
  const account = new AdAccount('act_367734144134684');

  console.log(account.id) 

  account
  .createCampaign(
    [Campaign.Fields.Id],
    {
      [Campaign.Fields.name]: title,
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: 'OUTCOME_TRAFFIC',
      [Campaign.Fields.special_ad_categories]: [],
    }
  )
  .then((result: any) => {
    console.log(result)
  })
  .catch((error: unknown) => {
    console.log(error)
  });


  return NextResponse.json({ success: true, title });
}

export const dynamic = 'force-dynamic';
