// src/pages/Home.tsx
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Inset,
  Separator,
  Badge,
  Link as RLink,
  Avatar,
} from "@radix-ui/themes";
import { PORTFOLIO } from "../data/portfolio";
import SkillMeter from "../components/SkillMeter";

export default function Home() {
  const P = PORTFOLIO;
  const initial = P.name?.[0]?.toUpperCase() ?? "F";

  return (
    <Box className="min-h-screen bg-slate-950">
      <Box
        p="5"
        style={{
          background: "linear-gradient(180deg, var(--slate-2), transparent)",
        }}
      >
        <Box mx="auto" style={{ maxWidth: 1040 }}>
          <Flex align="center" gap="4" wrap="wrap" mb="4">
            <Avatar
              radius="full"
              size="6"
              fallback={initial}
              src="/560787931_1906758349889224_1123794685514649335_n.jpg"
            />
            <div>
              <Heading size="9">{P.name}</Heading>
              <Text color="gray" size="4">
                {P.role}
              </Text>
              <Flex gap="2" mt="2" wrap="wrap">
                {P.location && <Badge color="violet">{P.location}</Badge>}
              </Flex>
            </div>
            <Flex gap="3" ml="auto" wrap="wrap">
              {P.github && (
                <Button asChild variant="soft">
                  <a href={P.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              )}
              {P.website && (
                <Button asChild color="violet">
                  <a href={P.website} target="_blank" rel="noopener noreferrer">
                    Portfolio
                  </a>
                </Button>
              )}
            </Flex>
          </Flex>

          {P.bio && (
            <Text size="4" color="gray" style={{ maxWidth: 760 }}>
              {P.bio}
            </Text>
          )}
        </Box>
      </Box>

      {/* CONTENT */}
      <Box mx="auto" px="5" py="6" style={{ maxWidth: 1040 }}>
        {/* Skill Meters (แบบในรูป) */}
        <Card size="4" mb="5" variant="surface">
          <Heading size="5" mb="3">
            Skill Levels
          </Heading>
          <Grid columns={{ initial: "1" }} gap="3">
            {(P.skillLevels ?? []).map((s) => (
              <SkillMeter key={s.label} label={s.label} percent={s.percent} />
            ))}
          </Grid>
        </Card>

        <Card size="4" mb="5" variant="surface">
          <Heading size="5" mb="3">
            Skills
          </Heading>
          <Flex gap="2" wrap="wrap">
            {(P.skills ?? []).map((s) => (
              <Badge key={s} variant="soft" color="violet">
                {s}
              </Badge>
            ))}
          </Flex>
        </Card>

        {/* Projects */}
        <Card size="4" variant="surface">
          <Heading size="5" mb="3">
            Highlighted Projects
          </Heading>
          <Grid columns={{ initial: "1", md: "2" }} gap="4">
            {(P.projects ?? []).map((p) => (
              <Card key={p.title} size="3" variant="classic">
                {p.cover && (
                  <Inset clip="padding-box" side="top" pb="current">
                    <img
                      src={p.cover}
                      alt={p.title}
                      style={{ height: 160, width: "100%", objectFit: "cover" }}
                    />
                  </Inset>
                )}
                <Flex justify="between" align="start" mb="2">
                  <Heading size="4">{p.title}</Heading>
                  <Badge color="gray">{p.period}</Badge>
                </Flex>
                <Text color="gray" mb="3">
                  {p.summary}
                </Text>
                <Flex gap="2" wrap="wrap" mb="3">
                  {(p.tech ?? []).map((t) => (
                    <Badge key={t} variant="soft">
                      {t}
                    </Badge>
                  ))}
                </Flex>
                <Flex gap="3">
                  {p.demo && (
                    <Button size="2" color="violet" variant="soft" asChild>
                      <a href={p.demo}>Live Demo</a>
                    </Button>
                  )}
                  {p.source && (
                    <Button size="2" variant="surface" asChild>
                      <a href={p.source}>Source</a>
                    </Button>
                  )}
                </Flex>
              </Card>
            ))}
          </Grid>
        </Card>

        <Separator my="5" />
        {P.email && (
          <Text>
            ติดต่อ:{" "}
            <RLink href={`mailto:${P.email}`} underline="always">
              {P.email}
            </RLink>
          </Text>
        )}
      </Box>
    </Box>
  );
}
