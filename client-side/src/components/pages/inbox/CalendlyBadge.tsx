import React from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

interface CalendlyBadgeProps {
  calendlyStatus?: string;
  calendlyUri?: string;
  meetingTime?: string;
  meetingLink?: string;
  onOpenCalendly?: () => void;
}

const statusConfig = {
  Scheduled: { icon: Calendar, color: 'text-blue-600', bgColor: 'bg-blue-100', label: 'Meeting Scheduled' },
  Confirmed: { icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100', label: 'Meeting Confirmed' },
  Cancelled: { icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-100', label: 'Meeting Cancelled' },
  Pending: { icon: Clock, color: 'text-yellow-600', bgColor: 'bg-yellow-100', label: 'Meeting Pending' },
};

export function CalendlyBadge({
  calendlyStatus,
  calendlyUri,
  meetingTime,
  meetingLink,
  onOpenCalendly
}: CalendlyBadgeProps) {
  if (!calendlyStatus) return null;

  const config = statusConfig[calendlyStatus as keyof typeof statusConfig] || statusConfig.Pending;
  const Icon = config.icon || Clock;

  return (
    <div className="border rounded-lg p-4 space-y-3 bg-gray-50">
      {/* Status Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${config.bgColor}`}>
            <Icon className={`w-4 h-4 ${config.color}`} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{config.label}</p>
            {meetingTime && (
              <p className="text-sm text-gray-600">
                {new Date(meetingTime).toLocaleString()}
              </p>
            )}
          </div>
        </div>
        
        {/* Open Calendly Button */}
        {onOpenCalendly && calendlyUri && (
          <button
            onClick={onOpenCalendly}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Calendly</span>
          </button>
        )}
      </div>

      {/* Meeting Link */}
      {meetingLink && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <Calendar className="w-4 h-4" />
            <span>Meeting Link:</span>
          </div>
          <a
            href={meetingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm break-all"
          >
            {meetingLink}
          </a>
        </div>
      )}

      {/* Calendly URI Display */}
      {calendlyUri && (
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <ExternalLink className="w-4 h-4" />
            <span>Calendly URI:</span>
          </div>
          <code className="text-xs bg-gray-200 px-2 py-1 rounded font-mono text-gray-800">
            {calendlyUri}
          </code>
        </div>
      )}
    </div>
  );
}
