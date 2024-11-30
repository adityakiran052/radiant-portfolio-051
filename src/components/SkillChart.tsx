import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillChartProps {
  skills: Record<string, number>;
}

const SkillChart = ({ skills }: SkillChartProps) => {
  const data = Object.entries(skills).map(([name, value]) => ({
    name,
    value
  }));

  console.log('Rendering SkillChart with data:', data);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={JSON.stringify(skills)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#6b21a8" />
            <PolarAngleAxis
              dataKey="name"
              tick={{ fill: '#e9d5ff', fontSize: 12 }}
            />
            <Radar
              name="Skill Level"
              dataKey="value"
              stroke="#d946ef"
              fill="#d946ef"
              fillOpacity={0.3}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-purple-900/90 backdrop-blur-lg border border-purple-500/20 rounded-lg p-2">
                      <p className="text-purple-200">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillChart;