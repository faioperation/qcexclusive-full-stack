import React from 'react';
import { Bot, CheckCircle, XCircle, AlertCircle, Calendar, DollarSign, Shield, Send } from 'lucide-react';

interface AIReplyBadgeProps {
  classification?: string;
  confidence?: number;
  aiGeneratedReply?: string;
  aiResponseStatus?: string;
  aiResponseSentAt?: string;
  onSendAIReply?: () => void;
  autoReplyEnabled?: boolean;
  onToggleAutoReply?: (enabled: boolean) => void;
}

const classificationConfig = {
  Interested: { icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100', label: 'Interested' },
  NotInterested: { icon: XCircle, color: 'text-red-600', bgColor: 'bg-red-100', label: 'Not Interested' },
  Neutral: { icon: AlertCircle, color: 'text-yellow-600', bgColor: 'bg-yellow-100', label: 'Neutral' },
  MeetingRequest: { icon: Calendar, color: 'text-blue-600', bgColor: 'bg-blue-100', label: 'Meeting Request' },
  PricingRequest: { icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-100', label: 'Pricing Request' },
  Spam: { icon: Shield, color: 'text-gray-600', bgColor: 'bg-gray-100', label: 'Spam' },
};

export function AIReplyBadge({
  classification,
  confidence,
  aiGeneratedReply,
  aiResponseStatus,
  aiResponseSentAt,
  onSendAIReply,
  autoReplyEnabled = false,
  onToggleAutoReply
}: AIReplyBadgeProps) {
  if (!classification) return null;

  const config = classificationConfig[classification as keyof typeof classificationConfig];
  const Icon = config?.icon || AlertCircle;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Sent': return 'text-green-600 bg-green-100';
      case 'Skipped': return 'text-yellow-600 bg-yellow-100';
      case 'Failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Sent': return 'AI Reply Sent';
      case 'Skipped': return 'AI Reply Skipped';
      case 'Failed': return 'AI Reply Failed';
      default: return 'AI Reply Pending';
    }
  };

  return (
    <div className="border rounded-lg p-4 space-y-3 bg-gray-50">
      {/* Classification Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${config?.bgColor}`}>
            <Icon className={`w-4 h-4 ${config?.color}`} />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{config?.label}</p>
            {confidence && (
              <p className="text-sm text-gray-600">
                Confidence: {Math.round(confidence * 100)}%
              </p>
            )}
          </div>
        </div>
        
        {/* Auto-Reply Toggle */}
        {onToggleAutoReply && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Auto-Reply:</span>
            <button
              onClick={() => onToggleAutoReply(!autoReplyEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoReplyEnabled ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoReplyEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* AI Reply Status */}
      {aiResponseStatus && (
        <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg">
          <div className="flex items-center space-x-2">
            <Bot className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              {getStatusText(aiResponseStatus)}
            </span>
          </div>
          {aiResponseSentAt && (
            <span className="text-xs text-gray-500">
              {new Date(aiResponseSentAt).toLocaleString()}
            </span>
          )}
        </div>
      )}

      {/* AI Generated Reply */}
      {aiGeneratedReply && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Bot className="w-4 h-4" />
            <span>AI Suggested Reply:</span>
          </div>
          <div className="bg-white border rounded-lg p-3">
            <p className="text-sm text-gray-800 whitespace-pre-wrap">{aiGeneratedReply}</p>
          </div>
          
          {/* Send AI Reply Button */}
          {onSendAIReply && aiResponseStatus !== 'Sent' && (
            <button
              onClick={onSendAIReply}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send AI Reply</span>
            </button>
          )}

          {/* Manual Override Button */}
          {onSendAIReply && aiResponseStatus === 'Sent' && (
            <button
              onClick={onSendAIReply}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Manual Reply</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
