// src/pages/Profile.tsx
import {
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Text,
  Separator,
  Avatar,
  Badge,
  Link as RLink,
} from "@radix-ui/themes";
import { PROFILE } from "../data/profile";

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Text as="div" size="2" color="gray" mb="1">
        {label}
      </Text>
      <Text as="div" size="3">
        {children}
      </Text>
    </div>
  );
}

export default function Profile() {
  const initial = (PROFILE.name || "F").slice(0, 1).toUpperCase();

  return (
    <Box className="min-h-screen bg-slate-950" px="5" py="8">
      <Box mx="auto" style={{ maxWidth: 960 }}>
        {/* Header */}
        <Card size="4" variant="surface">
          <Flex align="center" gap="4" wrap="wrap">
            <Avatar
              size="6"
              radius="full"
              src={PROFILE.avatarUrl}
              fallback={initial}
            />
            <div>
              <Heading size="7">{PROFILE.name}</Heading>
              <Text color="gray">{PROFILE.title}</Text>
              {PROFILE.location && (
                <Badge color="violet" mt="2">
                  {PROFILE.location}
                </Badge>
              )}
            </div>
            <Flex ml="auto" gap="3" wrap="wrap">
              {PROFILE.email && (
                <RLink href={`mailto:${PROFILE.email}`} underline="always">
                  Email
                </RLink>
              )}
              {PROFILE.website && (
                <RLink href={PROFILE.website} underline="always">
                  Website
                </RLink>
              )}
              {PROFILE.github && (
                <RLink href={PROFILE.github} underline="always">
                  GitHub
                </RLink>
              )}
              {PROFILE.linkedin && (
                <RLink href={PROFILE.linkedin} underline="always">
                  LinkedIn
                </RLink>
              )}
            </Flex>
          </Flex>

          <Separator my="4" />
          {PROFILE.summary && (
            <Text size="4" color="gray">
              {PROFILE.summary}
            </Text>
          )}

          <Flex gap="4" mt="4" wrap="wrap">
            {PROFILE.highlights.map((h) => (
              <Card key={h.label} variant="ghost" size="2">
                <Text weight="medium">{h.label}</Text>
                <Text color="gray"> · {h.value}</Text>
              </Card>
            ))}
          </Flex>
        </Card>

        {/* Contact */}
        <Card size="4" mt="5" variant="surface">
          <Heading size="5" mb="3">
            Contact
          </Heading>
          <Grid columns={{ initial: "1", md: "2" }} gap="4">
            <InfoRow label="อีเมล">
              {PROFILE.email ? (
                <RLink href={`mailto:${PROFILE.email}`} underline="always">
                  {PROFILE.email}
                </RLink>
              ) : (
                "—"
              )}
            </InfoRow>
            <InfoRow label="เว็บไซต์">
              {PROFILE.website ? (
                <RLink href={PROFILE.website} underline="always">
                  {PROFILE.website}
                </RLink>
              ) : (
                "—"
              )}
            </InfoRow>
          </Grid>
        </Card>

        {/* Skills */}
        <Card size="4" mt="5" variant="surface">
          <Heading size="5" mb="3">
            Skills
          </Heading>
          <Flex gap="2" wrap="wrap">
            {PROFILE.skills.map((s) => (
              <Badge key={s} variant="soft" color="violet">
                {s}
              </Badge>
            ))}
          </Flex>
        </Card>

        {/* Hobbies / Interests */}
        <Card size="4" mt="5" variant="surface">
          <Heading size="5" mb="3">
            Hobbies / Interests
          </Heading>
          <Flex gap="2" wrap="wrap">
            {PROFILE.hobbies.map((h) => (
              <Badge key={h} variant="soft" color="gray">
                {h}
              </Badge>
            ))}
          </Flex>
        </Card>

        {/* Timeline */}
        <Card size="4" mt="5" variant="surface">
          <Heading size="5" mb="3">
            Highlights & Experience
          </Heading>
          <Grid columns={{ initial: "1", md: "2" }} gap="4">
            {PROFILE.timeline.map((t, i) => (
              <Card key={i} variant="classic" size="3">
                <Flex justify="between" align="start" mb="2">
                  <Heading size="4">{t.title}</Heading>
                  <Badge color="gray">{t.period}</Badge>
                </Flex>
                <Text weight="medium">{t.org}</Text>
                <Text color="gray" mt="2">
                  {t.desc}
                </Text>
              </Card>
            ))}
          </Grid>
        </Card>
      </Box>
    </Box>
  );
}
