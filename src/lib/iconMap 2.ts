import {
    Shield, Flame, UserX, Car, Dog, Calendar,
    Award, Clock, MapPin, ClipboardCheck,
    Factory, HardHat, Stethoscope, Hotel,
    ArrowUpRight, ArrowRight,
    type LucideIcon,
} from 'lucide-react'

/**
 * Maps Lucide icon names (as strings stored in Sanity) to their React components.
 * Add new icons here as needed.
 */
const iconMap: Record<string, LucideIcon> = {
    Shield,
    Flame,
    UserX,
    Car,
    Dog,
    Calendar,
    Award,
    Clock,
    MapPin,
    ClipboardCheck,
    Factory,
    HardHat,
    Stethoscope,
    Hotel,
    ArrowUpRight,
    ArrowRight,
}

/**
 * Get a Lucide icon component by its string name.
 * Returns Shield as default if the icon is not found.
 */
export function getIconByName(name: string): LucideIcon {
    return iconMap[name] || Shield
}
