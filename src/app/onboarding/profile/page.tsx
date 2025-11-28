import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This module will collect basic profile details.</p>
      </CardContent>
    </Card>
  );
}
