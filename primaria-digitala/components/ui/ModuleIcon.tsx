import {
  MessageSquare,
  Users,
  Briefcase,
  MapPin,
  BarChart2,
  Search,
  FileText,
  LucideProps,
} from 'lucide-react'

const iconMap: Record<string, React.FC<LucideProps>> = {
  'message-square': MessageSquare,
  users: Users,
  briefcase: Briefcase,
  'map-pin': MapPin,
  'bar-chart-2': BarChart2,
  search: Search,
  'file-text': FileText,
}

interface ModuleIconProps extends LucideProps {
  name: string
}

export default function ModuleIcon({ name, ...props }: ModuleIconProps) {
  const Icon = iconMap[name] ?? FileText
  return <Icon {...props} />
}
