This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result, acces your IP:3000 to see mobile version.  

## First Commit Notes

- In the requirements is described "Fetch vehicle types using the endpoint" but the API returns only one VehicleTypeName equals to Passenger Car for the all data fetched. 
  - I think that can be good to ask more details to the client, but let's make the most flexible components as possible.
- The Result page show off all cars based on makeId and year. selected by user, so let's do generic dropdowns that works for list of years and makers as string[].

## Second Commit Notes
 - Add packages Redux, HeroIcons/React
 - src/services is releated to client functions data functcions, not to the REST API of application, contains the logic of data tratment fetched from server to front end.
 - configurations about theme in tailwind.config.ts we use darkMode: selector.

 ## Third Commit Notes
  - We use redux tookit for global context to management. The search paramans choiced by user (makerId and Year selected) are globaly accessible. 

## Fourth Commit Notes
  -All functional code is finished, some UX improvments is needed. 