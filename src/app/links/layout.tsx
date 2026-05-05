import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Boat Seafood Restaurant",
  description: "Welcome to Boat Seafood Restaurant. View our menu, leave a review, or follow us on social media.",
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
