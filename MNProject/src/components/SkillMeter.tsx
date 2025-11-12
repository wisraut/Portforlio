import { Card, Flex, Text } from "@radix-ui/themes";

export default function SkillMeter({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  const p = Math.max(0, Math.min(100, Math.round(percent)));
  return (
    <Card variant="surface" className="bg-slate-900/40 border-slate-800">
      <Flex direction="column" gap="2">
        <Text weight="medium">{label}</Text>
        <div className="h-2 w-full rounded-full bg-slate-800">
          <div
            className="h-2 rounded-full bg-violet-500 transition-[width] duration-700"
            style={{ width: `${p}%` }}
          />
        </div>
        <Text size="1" color="gray" align="right">
          {p}%
        </Text>
      </Flex>
    </Card>
  );
}
