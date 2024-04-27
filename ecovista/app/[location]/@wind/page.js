import NoLocationInfo from "@/components/NoLocationInfo";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/location-info";

export default async function page({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);
  if (resolved?.lat && resolved?.lon) {
    return (
      <>
        <WindComponent lat={resolved.lat} lon={resolved.lon} />
      </>
    );
  } else {
    <NoLocationInfo />;
  }
}
