export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNGMwMGZjYy02ZjJkLTRhOTAtOTU5Zi0wZTg4MzQzZmFlMWUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyNDU5NzM0NSwiZXhwIjoxNzI1MjAyMTQ1fQ.Xp9-xcXi3PW1CqzLvrHm0C0rVuEKEzldd6joK-1Oxgk";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};