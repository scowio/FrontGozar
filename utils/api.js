const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function get_channels_data() {
  console.log("API_URL:", API_URL);
  const config = {
    headers: {
      Authorization: "Bearer miomio",
    },
  };
  try {
    const response = await fetch(`${API_URL}/channels-data`, config,{next : {revalidate : 3600}});
    const res = await response.json()
    return res;
  } catch (error) {
    console.error("Error fetching channels data:", error);
    throw error;
  }
}

export { get_channels_data };
